module.exports = async function (instance) {
  try {
    await instance.authenticate();
    await instance.sync();
    console.log('Connection to Database success');
  } catch (error) {
    console.log(error);
  }
};
