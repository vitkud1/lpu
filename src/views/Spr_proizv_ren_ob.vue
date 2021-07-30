<template>
  <div class="about">
    <h1>Таблица со справочником производителей оборудования</h1>
    <b-table striped hover :items="organizacii" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Наименование",
        },
        {
          key: "id",
          label: "Код производителя",
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
      ],
      organizacii: [
        {
          name: `где брать?`,
          id: "где брать?",
          adress: "где брать?",
          INN: "где брать?",
          OGRN: "где брать?",
        },
      ],
    };
  },
  components: {},
};
</script>