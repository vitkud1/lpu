<template>
  <div class="about">
    <h1>
      Таблица с фильтрами оснащенности лпу (связь таблиц организаций и таблиц
      справочника мед оборудования
    </h1>
    <b-table striped hover :items="organizacii" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "vibor_lpu",
          label: "Выбор ЛПУ",
        },
        {
          key: "vibor_mod_type",
          label: "Выбор модель+тип",
        },
        {
          key: "name",
          label: "Наименование модели",
        },
        {
          key: "type",
          label: "Тип аппарата",
        },
        {
          key: "num",
          label: "Заводской номер",
        },
        {
          key: "year",
          label: "Год выпуска",
        },
      ],
      organizacii: [
        {
          vibor_lpu: "тут список лпу",
          vibor_mod_type: "тут список модель + тип",
          name: "ЛПУ номер 1",
          type: "тут тип аппарата",
          num: "тут заводской номер",
          year: "2021",
        },
      ],
    };
  },
  components: {},
};
</script>