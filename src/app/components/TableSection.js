"use client";
import React from "react";

export const TableSection = ({
  outerTitle,
  outerDescription,
  tableData,
}) => {
  const { title, description, headers, rows } = tableData || {};
  const isSingleHeader = headers && headers.length === 1;

  return (
    <div className="mt-8">
      {/* Outer title and description - show only if provided */}
      {outerTitle && (
        <h1 className="text-2xl md:text-3xl font-semibold redhat text-[#1B453C] mb-8 text-center">
          {outerTitle}
        </h1>
      )}
      {outerDescription && (
        <p className="text-gray-700 text-base mb-6 text-center">{outerDescription}</p>
      )}



      {/* Table wrapper */}
      <div className="overflow-x-auto border border-gray-300">
        <table className="min-w-full text-sm md:text-base border-collapse">
          <thead>
            {isSingleHeader ? (
              // When only one header, show the table title spanning all columns
              <tr>
                <th
                  colSpan={rows?.[0]?.length || 1}
                  className="bg-[#FAE5CD] text-center text-[15px] font-medium text-black border border-gray-300 py-3 px-4"
                >
                  {title}
                </th>
              </tr>
            ) : (
              <tr>
                {headers?.map((header, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 bg-gray-100 px-4 py-3 text-left redhat font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border border-gray-300 text-gray-700  redhat font-medium text-[15px] px-4 py-3 ${
                      cellIndex === 2 ? "italic1" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
