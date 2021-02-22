import app from '../../../app';

app.listen(process.env.NODE_PORT, () => {
  console.log(
    `Server is Running at PORT ${process.env.NODE_PORT} and AMBIENT ${process.env.NODE_ENV}`,
  );
});
