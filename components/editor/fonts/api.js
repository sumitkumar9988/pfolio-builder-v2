const api = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAmDVeY5HaP0Ki1pKv4r65y8Vxe8j6BHRQ`;

export const fetchFonts = async (params) => {
  try {
    const res = await fetch(`${api}`);
    const data = await res.json();
    return data.items;
  } catch (err) {
    console.log("err");
    return err.message;
  }
};
