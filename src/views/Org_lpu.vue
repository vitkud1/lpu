<template>
  <div>
    <div class="home">
      <h1>Таблица с организациями</h1>
      <b-button v-b-modal.modal-1>Добавить организацию</b-button>
      <b-modal id="modal-1" title="Добавление организации">
        <p class="my-4">Наименование ЛПУ</p>
        <b-form-input
          v-model="text"
          placeholder="Введите название ЛПУ"
        ></b-form-input>
        <p class="my-4">Адресс ЛПУ</p>
        <b-form-input
          v-model="text"
          placeholder="Введите адрес ЛПУ"
        ></b-form-input>
      </b-modal>
      <b-table striped hover :items="organizacii" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fields: [
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
      organizacii: [
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
        },
      ],
    };
  },
  components: {},
};
</script>
