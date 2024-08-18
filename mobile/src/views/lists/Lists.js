import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Style from '../../styles/Style'
import Header from '../../components/Header';

import KAI from './data/KAI';
import Mall from './data/Mall'
import Culinary from './data/Culinary';
import Salon from './data/Salon';
import Clinic from './data/Clinic';
import Pharmacy from './data/Pharmacy';
import Hotel from './data/Hotel';
import Bank from './data/Bank';
import Doctor from './data/Doctor';
import Information from './data/Information';
import Major from './data/Major';
import Tour from './data/Tour';
import Spbu from './data/Spbu';
import Sport from './data/Sport';
import Terminal from './data/Terminal';
import Market from './data/Market';
import Harbor from './data/Harbor';
import Industry from './data/Industry';
import School from './data/School';
import ServiceStation from './data/ServiceStation';
import PublicService from './data/PublicService';
import Lapor from './data/Lapor';
import Police from './data/Police';
import Hospital from './data/Hospital';
import Job from './data/Job';
import Pray from './data/Pray';
import Airport from './data/Airport';
import Puseksmas from './data/Puskesmas';

export default function Lists({ navigation, route }) {
  const sections = () => {
    if (route.params.section === 'KAI') {
      return <KAI navigation={navigation} />
    } else if (route.params.section === 'Mall') {
      return <Mall navigation={navigation} />
    } else if (route.params.section === 'Kuliner') {
      return <Culinary navigation={navigation} />
    } else if (route.params.section === 'Salon') {
      return <Salon navigation={navigation} />
    } else if (route.params.section === 'Klinik') {
      return <Clinic navigation={navigation} />
    } else if (route.params.section === 'Apotek') {
      return <Pharmacy navigation={navigation} />
    } else if (route.params.section === 'Hotel') {
      return <Hotel navigation={navigation} />
    } else if (route.params.section === 'Bank') {
      return <Bank navigation={navigation} />
    } else if (route.params.section === 'Dokter') {
      return <Doctor navigation={navigation} />
    } else if (route.params.section === 'Informasi') {
      return <Information navigation={navigation} />
    } else if (route.params.section === 'Kantor Wali Kota') {
      return <Major navigation={navigation} />
    } else if (route.params.section === 'Wisata') {
      return <Tour navigation={navigation} />
    } else if (route.params.section === 'SPBU') {
      return <Spbu navigation={navigation} />
    } else if (route.params.section === 'Olahraga') {
      return <Sport navigation={navigation} />
    } else if (route.params.section === 'Terminal') {
      return <Terminal navigation={navigation} />
    } else if (route.params.section === 'Pasar') {
      return <Market navigation={navigation} />
    } else if (route.params.section === 'Pelabuhan') {
      return <Harbor navigation={navigation} />
    } else if (route.params.section === 'Industri') {
      return <Industry navigation={navigation} />
    } else if (route.params.section === 'Sekolah') {
      return <School navigation={navigation} />
    } else if (route.params.section === 'Loket Pelayanan') {
      return <ServiceStation navigation={navigation} />
    } else if (route.params.section === 'Layanan Publik') {
      return <PublicService navigation={navigation} />
    } else if (route.params.section === 'Lapor') {
      return <Lapor navigation={navigation} />
    } else if (route.params.section === 'Polisi') {
      return <Police navigation={navigation} />
    } else if (route.params.section === 'Rumah Sakit') {
      return <Hospital navigation={navigation} />
    } else if (route.params.section === 'Lowongan Pekerjaan') {
      return <Job navigation={navigation} />
    } else if (route.params.section === 'Tempat Ibadah') {
      return <Pray navigation={navigation} />
    } else if (route.params.section === 'Bandara') {
      return <Airport navigation={navigation} />
    } else if (route.params.section === 'Puskesmas') {
      return <Puseksmas navigation={navigation} />
    }
  };
  return (
    <SafeAreaView style={Style.container}>
      <Header navigation={navigation} title={route.params.title} back={true} />
      <View style={{ flex: 1, padding: 15 }}>
        {sections()}
      </View>
    </SafeAreaView>
  );
}