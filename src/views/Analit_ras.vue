<template>
  <div class="about">
    <h1>Таблица соответствия нормам лпу, градация по цвету</h1>
    <b-table striped hover :items="normi_lpu" :fields="fields_lpu"></b-table>
    <h1>Таблица оснащенности по регионам с фильтром</h1>
    <b-table striped hover :items="osn_reg" :fields="fields_reg"></b-table>
    <h1>
      Карта оснащенности регионов с градацией по цвету взависимости от
      оснащенности
    </h1>
    <div
      style="
        height: vh;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
      "
    >
      <div style="height: 90vh; width: 100%">
        <l-map
          id="map"
          style="
            leaflet-control-zoom {
              position: 'bottomleft';
            }
          "
          :minZoom="4"
          :zoom="zoom"
          :maxBounds="maxBounds"
          :center="[58.01339803907709, 56.24605847056341]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
          <!-- данные -->
          <l-polygon
            :lat-lngs="polygon.latlngs"
            :fillColor="polygon.fillColor"
          ></l-polygon>
          <l-geo-json :geojson="geojson"></l-geo-json>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LPolygon, LGeoJson } from "vue2-leaflet";
// import Regions from '../assets/admin_level_2.geojson'
export default {
  data() {
    return {
      geojson: null,
      geojsonsort: null,
      polygon: {
        latlngs: [
          [57.7, 55.24],
          [58.01, 55.24],
          [58.08, 56.8],
          [58.01, 56.8],
        ],
        fillColor: "#4ef542",
      },
      maxBounds: [
        //south west
        [61.651287, 60.458187],
        //north east
        [55.992742, 51.241723],
      ],
      zoom: 10,
      fields_lpu: [
        {
          key: "name",
          label: "Название ЛПУ",
        },
        {
          key: "id",
          label: "Код ЛПУ",
        },
        {
          key: "adress",
          label: "Адрес ЛПУ",
        },
        {
          key: "INN",
          label: "ИНН парс ИНН2",
        },
        {
          key: "OGRN",
          label: "ОГРН",
        },
        {
          key: "FO",
          label: "ФО",
        },
        {
          key: "region",
          label: "Регион",
        },
      ],
      normi_lpu: [
        {
          name: `государственное бюджетное учреждение здравоохранения Новосибирской области "Госпиталь ветеранов войн № 3"`,
          id: "1",
          adress:
            "Новосибирская область, г. Новосибирск, ул. Демьяна Бедного, 71",
          INN: "5406011115",
          OGRN: "1025442449141",
          FO: "СФО",
          region: "Новосибирская область",
          _rowVariant: "danger",
        },
        {
          name: `государственное бюджетное учреждение здравоохранения Новосибирской области "Госпиталь ветеранов войн № 3"`,
          id: "1",
          adress:
            "Новосибирская область, г. Новосибирск, ул. Демьяна Бедного, 71",
          INN: "5406011115",
          OGRN: "1025442449141",
          FO: "СФО",
          region: "Новосибирская область",
          _rowVariant: "warning",
        },
      ],

      fields_reg: [
        {
          key: "name",
          label: "Название ЛПУ",
        },
        {
          key: "id",
          label: "Код ЛПУ",
        },
        {
          key: "adress",
          label: "Адрес ЛПУ",
        },
        {
          key: "INN",
          label: "ИНН парс ИНН2",
        },
        {
          key: "OGRN",
          label: "ОГРН",
        },
        {
          key: "FO",
          label: "ФО",
        },
        {
          key: "region",
          label: "Регион",
        },
      ],
      osn_reg: [
        {
          name: `государственное бюджетное учреждение здравоохранения Новосибирской области "Госпиталь ветеранов войн № 3"`,
          id: "1",
          adress:
            "Новосибирская область, г. Новосибирск, ул. Демьяна Бедного, 71",
          INN: "5406011115",
          OGRN: "1025442449141",
          FO: "СФО",
          region: "Новосибирская область",
          _rowVariant: "success",
        },
        {
          name: `государственное бюджетное учреждение здравоохранения Новосибирской области "Госпиталь ветеранов войн № 3"`,
          id: "1",
          adress:
            "Новосибирская область, г. Новосибирск, ул. Демьяна Бедного, 71",
          INN: "5406011115",
          OGRN: "1025442449141",
          FO: "СФО",
          region: "Новосибирская область",
          _rowVariant: "warning",
        },
      ],
    };
  },
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    LGeoJson,
  },
  async created() {
    // var GeoJSON = require("geojson");
    // const response = GeoJSON.parse("../assets/admin_level_3");
    const response = await fetch(
      "https://raw.githubusercontent.com/vitkud1/lpu/master/src/assets/admin_level_4.geojson"
    );
    this.geojson = await response.json();
    // this.geojson = Object.freeze(response.json());
    // async function cikl(geojson) {
    //   for (var i = 0; i < geojson.features.length; i++) {
    //     if (geojson.features[i].name != "Селенгинский район") {
    //       geojson.features.splice(i, 1);
    //     }
    //   }
    // }
    // await cikl(this.geojson);
    console.log(this.geojson);
  },
};
</script>
