
import './HomeworkPage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const homeworkData = {
  headerData: { title: 'Homework React lesson 3', description: 'Header' },
  footerData: { text: 'Footer Content' },
  sidebarData: { links: ['Home', 'Name', 'Contact'] }
};

function HomeworkPage() {
  return (
    <div className="homework-page">
      <div className="header-container">
        <Header data={homeworkData.headerData} />
      </div>
      <div className="main-container">
        <div className="sidebar-container">
          <Sidebar data={homeworkData.sidebarData} />
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
      <div className="footer-container">
        <Footer data={homeworkData.footerData} />
      </div>
    </div>
  );
}

export default HomeworkPage;