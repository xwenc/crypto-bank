type TagProps = {
  name: string;
};

const CardTag: React.FC<TagProps> = ({ name }) => {
  return (
    <div className=" absolute left-0 top-0">
      <div className="py-3">
        <div className="flex items-center justify-center rounded-r bg-gray-400 text-white text-xs py-1 px-6">
          {name}
        </div>
      </div>
    </div>
  );
};

export default CardTag;
