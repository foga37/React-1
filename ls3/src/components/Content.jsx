
import Count from './Count';

function Content() {
  const contentData = {
    title: 'Content',
    describe: 'This is content describe.'
  };

  return (
    <div className="content">
      <h1>{contentData.title}</h1>
      <p>{contentData.describe}</p>
      <Count />
    </div>
  );
}


export default Content;

