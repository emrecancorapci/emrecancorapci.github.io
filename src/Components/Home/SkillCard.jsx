import Card from '../Common/Card';

function SkillCard({ children }) {
  return (
    <Card>
      <p className="h11 text-center text-black mb-0 py-3">{children}</p>
    </Card>
  );
}

export default SkillCard;
