export const metadata = {
  title: "Consult",
};

type Props = {
  params: {
    username: string;
  };
}; 

export default function Page({ params }: Props) {
  const { username } = params;
  return (
    <div className="grid place-items-center h-screen fon-semibold text-xl">
      Username === {username}
    </div>
  );
}
