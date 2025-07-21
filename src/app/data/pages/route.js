import axios from 'axios';

export async function GET(req) {
    
  const page = req.headers.get('x-page');

  console.log(process.env.SITE_URL);

  console.log('page name',page);
  if (!page) {
    return Response.json({ error: 'Page not provided' }, { status: 400 });
  }

  // Use env safely
  const baseURL = process.env.SITE_URL;

  // Optional: Validate page
  const validPages = ['homepage']; // Add more pages here if needed
  if (!validPages.includes(page)) {
    return Response.json({ error: 'Invalid page requested' }, { status: 404 });
  }

  try {
    const response = await axios.get(`${baseURL}/${page}`);
    const data = response.data;

    return Response.json({
      status: 'success',
      page,
      site: baseURL,
      data,
    });
  } catch (error) {
  console.error('Error fetching data:', error.message);

  return Response.json(
    {
      status: 'error',
      message: 'Failed to fetch data from external API',
      error: error.message, // Add this line
      urlTried: `${baseURL}/api/${page}`, // Optional: log the actual URL
    },
    { status: 500 }
  );
}}
