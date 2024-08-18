import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Style from "../../styles/Style";
import Header from "../../components/Header";
import colors from "../../constants/Colors";
import GridCard from "../../components/GridCard";
import {lang} from '../../../i18n';

export default function Grids({ navigation, mode }) {

  const pemerintah = [
    { section: 'Lapor', title: lang['Lapor'] },
    { section: 'Layanan Publik', title: lang['Layanan Publik'] },
    { section: 'Skpd', title: lang['SKPD'] },
    { section: 'Loket Pelayanan', title: lang['Loket Pelayanan'] },
  ];

  const informasi = [
    { section: 'News', title: lang['Berita'] },
    { section: 'Agenda', title: lang['Agenda'] },
    { section: 'Lowongan Pekerjaan', title: lang['Lowongan Pekerjaan'] },
    { section: 'Tempat Ibadah', title: lang['Tempat Ibadah'] },
    { section: 'Harga Pangan', title: lang['Harga Pangan'] },
  ];

  const kesehatan = [
    { section: 'Rumah Sakit', title: lang['Rumah Sakit'] },
    { section: 'Puskesmas', title: lang['Puskesmas'] },
    { section: 'Klinik', title: lang['Klinik'] },
    { section: 'Dokter', title: lang['Dokter'] },
    { section: 'Apotek', title: lang['Apotek'] },
  ];

  const ekonomi = [
    { section: 'Pasar', title: lang['Pasar'] },
    { section: 'Mall', title: lang['Mall'] },
    { section: 'Hotel', title: lang['Hotel'] },
    { section: 'Kuliner', title: lang['Kuliner'] },
    { section: 'Salon', title: lang['Salon'] },
    { section: 'Industri', title: lang['Industri'] },
  ];

  const fasmum = [
    { section: 'Sekolah', title: lang['Sekolah'] },
    { section: 'Wisata', title: lang['Wisata dan Budaya'] },
    { section: 'Olahraga', title: lang['Olahraga'] },
    { section: 'Bank', title: lang['Bank / ATM'] },
    { section: 'Polisi', title: lang['Polisi'] },
    { section: 'Tempat Ibadah', title: lang['Tempat Ibadah'] },
    { section: 'SPBU', title: lang['SPBU'] },
    { section: 'Terminal', title: lang['Terminal'] },
  ];

  return (
    <SafeAreaView style={Style.container}>
      <Header navigation={navigation} menu={true} mode={mode} />
      <View style={{ flex: 1, padding: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <GridCard navigation={navigation} title={lang['Pemerintah']} data={pemerintah} hColor={colors.success} />
          <GridCard navigation={navigation} title={lang['Informasi']} data={informasi} hColor={colors.blue} />
          <GridCard navigation={navigation} title={lang['Kesehatan']} data={kesehatan} hColor={colors.danger} />
          <GridCard navigation={navigation} title={lang['Ekonomi']} data={ekonomi} hColor={colors.info} />
          <GridCard navigation={navigation} title={lang['Fasilitas Umum']} data={fasmum} hColor={colors.warning} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}