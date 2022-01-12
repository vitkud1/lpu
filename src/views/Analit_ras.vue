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
    <input v-model="regionInput" />
    <b-button variant="success" @click="clickButton">Тыкни</b-button>
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
          ref="map"
          style="
            leaflet-control-zoom {
              position: 'bottomleft';
            }
          "
          :minZoom="4"
          :zoom="zoom"
          :center="[61.573803, 95.574909]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
          <!-- данные -->
          <!-- <l-geo-json :geojson="geojson" :options="makeColor"></l-geo-json> -->
          <l-geo-json :geojson="geoCities">
            <l-icon
              :icon-size="[25, 25]"
              :popup-anchor="[0, -10]"
              icon-url="lpu\dist\img\icons\redIcon.png"
            />
          </l-geo-json>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson, LIcon } from "vue2-leaflet";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
import axios from "axios";
// import collect from "collect.js";
export default {
  data() {
    return {
      regionInput: null,
      geoCities: {
        type: "FeatureCollection",
        generator: "overpass-ide",
        copyright:
          "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
        timestamp: "2021-08-09T12:34:57Z",
        features: {
          type: "",
          properties: {},
          geometry: {
            type: "Point",
          },
          id: null,
        },
      },
      geojson: {
        type: "FeatureCollection",
        // fillColor: "",
        geocoding: {
          creation_date: "2016-01-09",
          generator: {
            author: {
              name: "Mapzen",
            },
            package: "fences-builder",
            version: "0.1.2",
          },
          license: "ODbL (see http://www.openstreetmap.org/copyright)",
        },
        features: [
          {
            geomerty: {},
            properties: {},
            type: "",
            osm_type: "",
            name: "",
            id: null,
          },
        ],
      },
      iconSize: 64,

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
      zoom: 3,
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
  methods: {
    clickButton() {
      this.getGeo();
      this.getGeoCities();
    },
    async getGeo() {
      await axios({
        url: "http://localhost:3000/api/geoj",
        method: "GET",
        params: {
          region: this.regionInput,
        },
      }).then((data) => {
        this.geojson.features = data.data;
        this.getFillColor();
      });
    },
    async getFillColor() {
      await axios({
        url: "http://localhost:3000/api/geoj/ranges",
        method: "GET",
        params: {
          region: this.regionInput,
        },
      }).then((data) => {
        function getColor(name, data) {
          var current = data.find((data) => data.district === name);
          if (current) {
            var ranges = current.sub;
            var min = ranges.reduce(function (res, obj) {
              if (res.range == 0) {
                return obj;
              } else {
                return obj.range < res.range ? obj : res;
              }
            });
            console.log(min);
            var d = min.range;
          } else {
            d = 1001;
          }

          return d > 1000
            ? "#7d7d7d"
            : d > 250
            ? "#ff0000"
            : d > 200
            ? "#ff3c00"
            : d > 150
            ? "#ff7b00"
            : d > 100
            ? "#ffbf00"
            : d > 50
            ? "#eaff00"
            : "#00ff2a";
        }
        function style(features) {
          return {
            fillColor: getColor(features.name, data.data),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
          };
        }
        L.geoJSON(this.geojson, {
          style: style,
          // style: function (features) {
          //   console.log(features);
          //   console.log(data.data);
          //   // тут должна быть логика покраски от расстояния
          //   switch (features.name) {
          //     case "Осинский район":
          //       return { fillColor: "#ff0000" };
          //   }
          // },
        }).addTo(this.$refs.map.mapObject);
      });
    },
    async getGeoCities() {
      await axios({
        url: "http://localhost:3000/api/geoj/cities",
        method: "GET",
        params: {
          region: this.regionInput,
        },
      }).then((data) => {
        this.geoCities.features = data.data;
      });
    },
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LIcon,
  },
  async mounted() {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  },
  async created() {},
};
</script>
