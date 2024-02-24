import AddBox from '@mui/icons-material/AddBox';
export default function BulletPoints({ data }) {
  return (
    <div className="py-10">
      <div className="body-large font-semibold text-primary-dark text-left ">
        {data?.heading}
      </div>
      {data?.points.map((point) => (
        <div className="py-2 flex flex-row gap-4">
          <AddBox className="text-primary-dark"></AddBox>
          <div className="body-normal text-left">{point}</div>
        </div>
      ))}
    </div>
  );
}
