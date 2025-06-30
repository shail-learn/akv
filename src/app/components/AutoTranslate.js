"use client";
import { useEffect } from "react";
import axios from "axios";

export default function AutoTranslate() {
  useEffect(() => {
    const translateTextNodes = async () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            const parent = node.parentNode;
            if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.nodeName)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      const nodes = [];
      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }

      for (const node of nodes) {
        const originalText = node.nodeValue.trim();
        if (!originalText || originalText.length > 500) continue;

        try {
          const res = await axios.post("https://libretranslate.com/translate", {
            q: originalText,
            source: "auto",
            target: "en",
            format: "text",
          }, {
            headers: {
              "accept": "application/json",
            },
          });

          if (res.data.translatedText) {
            node.nodeValue = res.data.translatedText;
          }
        } catch (error) {
          console.error("Translation failed:", error.message);
        }

        // Wait to avoid rate limiting
        await new Promise((r) => setTimeout(r, 300));
      }
    };

    translateTextNodes();
  }, []);

  return null; // no UI
}
