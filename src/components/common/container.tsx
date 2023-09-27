interface ContainerProps {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <div className="bg-white border-dark-purple border-2 p-2 rounded-full">
      {props.children}
    </div>
  );
}
