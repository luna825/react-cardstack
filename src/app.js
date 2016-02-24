import React from 'react'
import ReactDOM from 'react-dom'
import { CardStack,Card } from './cardstack'


const styles = {
  cardHeader: {
    display: 'flex',
    height: '125px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    color: '#fff',
  },
  headerName: {
    margin: 0,
    fontWeight: 500,
    fontSize: '25px',
    textAlign: 'right'
  },
  headerTitle: {
    margin: '4px 0 0',
    fontWeight: 300,
    fontSize: '17px',
    opacity: 0.8,
    textAlign: 'right'
  }
};

const App = (props) => (
  <CardStack height={500} width={400} background='#f8f8f8' hoverOffset={25}>
    <Card background='#2980B9'>
      <TeamMemberCard
        imgSrc='https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg'
        imgBorderColor='#015389'
        name='James Stuart'
        title='Training Manager'
        mobileNo='0491 570 156'
        location='Sydney, Australia'
        role='Starting the company in sales, James is now responsible for overseeing all staff training. James mainly focuses on getting new employees up to speed with the practices and procedures Hunter & Co has continually refined over the last 50 years.'
      />
    </Card>
    <Card background='#27AE60'>
    </Card>
    <Card background='#9B27AE'>
    </Card>
    <Card background='#e67e22'>
    </Card>
  </CardStack>
)


const TeamMemberCard = (props) => (
  <div style={{position:'absolute',top:0}}>
    <header style={styles.cardHeader} className='card-header-details'>
      <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
      <div>
        <h1 style={styles.headerName}>{props.name}</h1>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
      </div>
    </header>

    <div style={{color: '#fff'}}>
      <DetailsRow
        icon='ion-ios-telephone-outline'
        title={props.mobileNo}
      />

      <DetailsRow
        icon='ion-ios-location-outline'
        title={props.location}
      />

      <DetailsRow
        icon='icon ion-ios-paper-outline'
        title='Main Role'
        summary={props.role}
      />
    </div>
  </div>
)

const ProfilePicture = ({imgSrc, borderColor}) => (
  <img style={{width:'60px',height:'60px',
  borderRadius:'100%',border:`3px solid ${borderColor}`}} src={imgSrc}/>
)

const DetailsRow = ({ icon, title, summary }) => {
  const styles = {
    row: {
      width: '100%',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      margin: '25px 0'
    },
    icon: {
      display: 'block',
      width: '25px',
      height: '30px',
      margin: '0 20px 0 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontSize: '22px'
    },
    title: {
      fontWeight: 500,
      fontSize: '20px',
      margin: 0,
      fontStyle: 'italic'
    }
  };
  const renderSummary = () => {
    if(summary) return (
      <p style={{ fontWeight: 300, lineHeight: 1.45 }}>
        {summary}
      </p>
    );
    return null;
  };

  return (
    <div style={styles.row}>
      <span className={`icon ${icon}`}
      style={Object.assign({}, styles.icon, {alignSelf: 'flex-start'})}></span>
      <div style={{ width: '80%' }}>
        <h2 style={styles.title}>
          {title}
        </h2>
        {renderSummary()}
      </div>
    </div>
  );
};


ReactDOM.render(<App />,document.getElementById('app'))