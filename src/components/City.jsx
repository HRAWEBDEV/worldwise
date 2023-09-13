import styles from './City.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Message from './Message';
import { enviroment } from '../env/env';
const formatDate = (date) =>
 new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
 }).format(new Date(date));

function City() {
 const [city, setCity] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const param = useParams();
 console.log(param);
 // TEMP DATA

 useEffect(() => {
  const getCity = async () => {
   setIsLoading(true);
   try {
    const result = await fetch(
     `${enviroment['BASE_URI']}/cities?id=${param.id}`
    );
    const data = await result.json();
    setCity(data);
   } catch (err) {
    console.log(err);
   } finally {
    setIsLoading(false);
   }
  };
  getCity();
 }, [param.id]);

 if (isLoading) return <Spinner />;
 if (!city.length) return <Message message='no city found' />;
 const { cityName, emoji, date, notes } = city[0];
 console.log(city);
 return (
  <div className={styles.city}>
   <div className={styles.row}>
    <h6>City name</h6>
    <h3>
     <span>{emoji}</span> {cityName}
    </h3>
   </div>

   <div className={styles.row}>
    <h6>You went to {cityName} on</h6>
    <p>{formatDate(date || null)}</p>
   </div>

   {notes && (
    <div className={styles.row}>
     <h6>Your notes</h6>
     <p>{notes}</p>
    </div>
   )}

   <div className={styles.row}>
    <h6>Learn more</h6>
    <a
     href={`https://en.wikipedia.org/wiki/${cityName}`}
     target='_blank'
     rel='noreferrer'
    >
     Check out {cityName} on Wikipedia &rarr;
    </a>
   </div>

   <div>{/* <ButtonBack /> */}</div>
  </div>
 );
}

export default City;
