export const fetchNoteApi = async (req) => {
  try {
    // const res = await fetch(url, {
    //   ...req,
    // });
    // return await res.json();
    console.log(req);
  } catch (err) {
    console.log(err);
    return err;
  }
};
