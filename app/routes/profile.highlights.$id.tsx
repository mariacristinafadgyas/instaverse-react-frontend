import { useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { api } from '~/services/api';
import { highlightSchema, type Highlight } from '~/schemas/highlight.schema';
import { HighlightStory } from '~/components/HighlightStory';

export async function loader({ params }: LoaderFunctionArgs) {
  // The `params` object contains the dynamic parts of the URL.
  // The key (`id`) matches the filename (`$id.tsx`).
  const highlightId = params.id;

  console.log('Loading highlight with ID:', highlightId);
  console.log('Current URL params:', params);

  try {
    console.log('Making request to:', `/profile/highlights/${highlightId}`);
    const response = await api.get(`/highlights/${highlightId}`);
    //return highlightSchema.parse(response.data);
    console.log('Raw API response:', response.data);

    const parsed = highlightSchema.parse(response.data);
    console.log('Parsed highlight:', parsed);
    console.log(highlightSchema.safeParse(response.data));

    return parsed;
  } catch (error) {
    console.error('Error loading highlight:', error);
    throw new Response('Highlight not found', { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData() as Highlight;
  // Add a typeguard to help typescript understand what the higlhight is if needed
  console.log('Current URL:', window.location.href);
  return highlight ? (
    <div>
      <h1>{highlight.title}</h1>
      <HighlightStory highlight={highlight} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
