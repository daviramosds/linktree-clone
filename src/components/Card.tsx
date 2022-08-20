interface CardPropsInterface {
    title: string
    url: string
}

export function Card({ title, url }: CardPropsInterface) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-white w-full py-4  */ text-sm font-medium flex justify-center rounded my-4 hover:scale-105 transition-transform"
    >
      {title}
    </a>
  );
}
