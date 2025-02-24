// export async function GET(request) {
//     return new Response(JSON.stringify({ message: "Hello from the Homepage API!" }));
// }

export async function GET(request) {

    let fet=await fetch ('http://127.0.0.1:8000/api/homepage');
    let res=await fet.json();
    return new Response(JSON.stringify({ message: "success",data:res }), {
        headers: { "Content-Type": "application/json" }
    });
}