import styles from './City.module.css';
import { useCities } from './CitiesProvider';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Message from './Message';
const formatDate = (date) =>
 new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
 }).format(new Date(date));

function City() {
 const {
  currentCity: city,
  currentCityIsLoading: isLoading,
  updateTargetCity,
 } = useCities();
 const param = useParams();
 // TEMP DATA

 useEffect(() => {
  updateTargetCity(param.id);
 }, [param.id, updateTargetCity]);

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
