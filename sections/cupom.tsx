export interface Props {
  title: string;
  description: string;
}

export default function Cupom(props: Props) {
  return (
    <div className="cupom bg-violet-950 max-w-7xl min-h-80 p-6 m-auto my-6 flex justify-center flex-col rounded-3xl max-sm:m-2.5">
      <h3 className="text-indigo-50 text-center font-bold ">{props.title}</h3>
      <section className="text-indigo-50 text-center font-normal text-lg">
        {props.description}
      </section>
    </div>
  );
}
