import background from '../img/img2.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '400px', // Add width and height to the image container
    height: '200px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', // Adjust the background size to cover the container
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}></div>
    </div>
  );
}
