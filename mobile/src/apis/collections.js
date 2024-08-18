import axios from './Axios';

export const gempa = async () => {
  const res = await axios.get(
    'https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json',
  );
  return res.data.Infogempa.gempa;
};
