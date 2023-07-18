import { MainSliders } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/main-sliders`;

const getSliders = async (id: string): Promise<MainSliders> => {
  const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });

  return res.json();
};

export default getSliders;
