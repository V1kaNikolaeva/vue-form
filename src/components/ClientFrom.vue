<template>
  <div>
    <form action="" class="form" @submit.prevent="sendClient">
      <div class="common-information-contanier">
        <h3 class="title">Основная информация</h3>
        <div class="input-group">
          <UiInput 
            v-model="localClient.surname" 
            label="Фамилия*"
            :invalid="($v.localClient.surname.$dirty && !$v.localClient.surname.required) || 
            ($v.localClient.surname.$dirty && !$v.localClient.surname.onlyText) ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'фамилия'"
            :errorType="$v.localClient.surname.$dirty && !$v.localClient.surname.required ? 'required' :
            $v.localClient.surname.$dirty && !$v.localClient.surname.onlyText ? 'onlyText' :
            false"
          >
          </UiErrorMessage>
        </div>
        <div class="input-group">
          <UiInput
            v-model="localClient.name"
            label="Имя*"
            :invalid="($v.localClient.name.$dirty && !$v.localClient.name.required) || ($v.localClient.name.$dirty && !$v.localClient.name.onlyText) ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'имя'"
            :errorType="$v.localClient.name.$dirty && !$v.localClient.name.required ? 'required' :
            $v.localClient.name.$dirty && !$v.localClient.name.onlyText ? 'onlyText' :
            false"
          >
          </UiErrorMessage>
        </div>
        <div class="input-group">
          <UiInput 
            v-model="localClient.patronymic" 
            label="Отчество"
            :invalid="$v.localClient.patronymic.$dirty && !$v.localClient.patronymic.onlyText ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'отчество'"
            :errorType="$v.localClient.patronymic.$dirty && !$v.localClient.patronymic.onlyText ? 'onlyText' : false"
          >
          </UiErrorMessage>
        </div>
        <div class="input-group">
          <UiInputDate
            v-model="localClient.birthday"
            :max="new Date().toISOString().substring(0, 10)"
            :invalid="$v.localClient.birthday.$dirty && !$v.localClient.birthday.required ? true :
            false"
            label="Дата рождения*"
          >
          </UiInputDate>
          <UiErrorMessage
            :labelName="'дата рождения'"
            :errorType="$v.localClient.birthday.$dirty && !$v.localClient.birthday.required ? 'required' :
            false"
          >
          </UiErrorMessage>
        </div>
        <div class="input-group">
          <UiInput 
            v-model="localClient.phone" 
            label="Номер телефона*"
            :invalid="($v.localClient.phone.$dirty && !$v.localClient.phone.required) ||
            ($v.localClient.phone.$dirty && !$v.localClient.phone.phoneNumber) ||
            ($v.localClient.phone.$dirty && !$v.localClient.phone.minLength) ||
            ($v.localClient.phone.$dirty && !$v.localClient.phone.maxLength) ||
            ($v.localClient.phone.$dirty && !$v.localClient.phone.numeric) ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'номер телефона'"
            :errorType="$v.localClient.phone.$dirty && !$v.localClient.phone.required ? 'required' :
            $v.localClient.phone.$dirty && !$v.localClient.phone.numeric ? 'onlyNums' :
            $v.localClient.phone.$dirty && !$v.localClient.phone.phoneNumber ? 'phone' :
            ($v.localClient.phone.$dirty && !$v.localClient.phone.maxLength) || ($v.localClient.phone.$dirty && !$v.localClient.phone.minLength) ? 'length' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.gender" 
            label="Пол"
            :invalid="$v.localClient.gender.$dirty && !$v.localClient.gender.onlyText ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'пол'"
            :errorType="$v.localClient.gender.$dirty && !$v.localClient.gender.onlyText ? 'onlyText' : false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiSelect
            v-model="localClient.clientGroup"
            label="Группа клиентов*"
            :invalid="$v.localClient.clientGroup.$dirty && !$v.localClient.clientGroup.required ? true :
            false"
            :options="clientTypes"
            multiple
          ></UiSelect>
          <UiErrorMessage
            :labelName="'группа клиентов'"
            :errorType="$v.localClient.clientGroup.$dirty && !$v.localClient.clientGroup.required ? 'required' : false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiSelect
            v-model="localClient.doctor"
            name="doctor"
            label="Лечащий врач"
            :options="doctors"
          ></UiSelect>
        </div>

        <div class="input-group">
          <UiCheckbox
            v-model="localClient.message"
            type="checkbox"
            label="Не отправлять СМС"
          ></UiCheckbox>
        </div>
      </div>

      <div class="adress-contanier">
        <h3 class="title">Адрес</h3>
        <div class="input-group">
          <UiInput 
            v-model="localClient.index" 
            label="Индекс"
            :invalid="$v.localClient.index.$dirty && !$v.localClient.index.numeric ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'индекс'"
            :errorType="$v.localClient.index.$dirty && !$v.localClient.index.numeric ? 'onlyNums' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.country" 
            label="Старана"
            :invalid="$v.localClient.country.$dirty && !$v.localClient.country.onlyText ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'страна'"
            :errorType="$v.localClient.country.$dirty && !$v.localClient.country.onlyText ? 'onlyText' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.region" 
            label="Область"
            :invalid="$v.localClient.region.$dirty && !$v.localClient.region.onlyText ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'область'"
            :errorType="$v.localClient.region.$dirty && !$v.localClient.region.onlyText ? 'onlyText' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.city" 
            label="Город*"
            :invalid="($v.localClient.city.$dirty && !$v.localClient.city.required) || ($v.localClient.city.$dirty && !$v.localClient.city.onlyText) ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'город'"
            :errorType="$v.localClient.city.$dirty && !$v.localClient.city.required ? 'required' :
            $v.localClient.city.$dirty && !$v.localClient.city.onlyText ? 'onlyText' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.street" 
            label="Улица"
            :invalid="$v.localClient.street.$dirty && !$v.localClient.street.onlyText ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'улица'"
            :errorType="$v.localClient.street.$dirty && !$v.localClient.street.onlyText ? 'onlyText' : false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.houseNumber" 
            label="Дом"
            :invalid="$v.localClient.houseNumber.$dirty && !$v.localClient.houseNumber.numeric ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'дом'"
            :errorType="$v.localClient.houseNumber.$dirty && !$v.localClient.houseNumber.numeric ? 'onlyNums' : false"
          >
          </UiErrorMessage>
        </div>
      </div>

      <div class="document-contanier">
        <h3 class="title">Паспорт</h3>

        <div class="input-group">
          <UiSelect
            v-model="localClient.documentType"
            name="documentType"
            label="Тип документа*"
            :invalid="$v.localClient.documentType.$dirty && !$v.localClient.documentType.required ? true :
            false"
            :options="documentTypes"
          >
          </UiSelect>
          <UiErrorMessage
            :labelName="'тип документа'"
            :errorType="$v.localClient.documentType.$dirty && !$v.localClient.documentType.required ? 'required' : false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.series" 
            label="Серия"
            :invalid="($v.localClient.series.$dirty && !$v.localClient.series.minLength) ||
            ($v.localClient.series.$dirty && !$v.localClient.series.maxLength) ||
            ($v.localClient.series.$dirty && !$v.localClient.series.numeric) ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'серия'"
            :errorType="$v.localClient.series.$dirty && !$v.localClient.series.numeric ? 'onlyNums' :
            ($v.localClient.series.$dirty && !$v.localClient.series.maxLength) || ($v.localClient.series.$dirty && !$v.localClient.series.minLength) ? 'length' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.number" 
            label="Номер"
            :invalid="($v.localClient.number.$dirty && !$v.localClient.number.minLength) ||
            ($v.localClient.number.$dirty && !$v.localClient.number.maxLength) ||
            ($v.localClient.number.$dirty && !$v.localClient.number.numeric) ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'номер'"
            :errorType="$v.localClient.number.$dirty && !$v.localClient.number.numeric ? 'onlyNums' :
            ($v.localClient.number.$dirty && !$v.localClient.number.maxLength) || ($v.localClient.number.$dirty && !$v.localClient.number.minLength) ? 'length' :
            false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInput 
            v-model="localClient.issueBy" 
            label="Кем выдан"
            :invalid="$v.localClient.issueBy.$dirty && !$v.localClient.issueBy.onlyText ? true :
            false"
          >
          </UiInput>
          <UiErrorMessage
            :labelName="'кем выдан'"
            :errorType="$v.localClient.issueBy.$dirty && !$v.localClient.issueBy.onlyText ? 'onlyText' : false"
          >
          </UiErrorMessage>
        </div>

        <div class="input-group">
          <UiInputDate 
            v-model="localClient.issueDate" 
            label="Дата выдачи*"
            :max="new Date().toISOString().substring(0, 10)"
            :invalid="$v.localClient.issueDate.$dirty && !$v.localClient.issueDate.required ? true :
            false"
          >
          </UiInputDate>
          <UiErrorMessage
            :labelName="'дата выдачи'"
            :errorType="$v.localClient.issueDate.$dirty && !$v.localClient.issueDate.required ? 'required' : false"
          >
          </UiErrorMessage>
        </div>
      </div>
      <div class="submit-button">
        <UiButton buttonType="save">Создать клиента</UiButton>
      </div>
    </form>
    <TheToaster ref="toaster"></TheToaster>
  </div>
</template>

<script>
import UiCheckbox from "./UiCheckbox.vue";
import UiInput from "./UiInput.vue";
import UiSelect from "./UiSelect.vue";
import UiButton from "./UiButton.vue";
import UiInputDate from "./UiInputDate.vue"
import UiErrorMessage from "./UiErrorMessage.vue";
import TheToaster from "./TheToaster.vue";
import { client } from "../services/clientService";
import { minLength, required, helpers, numeric, maxLength } from "vuelidate/lib/validators";

const onlyText = helpers.regex('text', /\p{Letter}/u);
const phoneNumber = helpers.regex('phone', /^[7][0-9]*$/)

export default {
  name: "ClientForm",

  components: { UiInput, UiSelect, UiCheckbox, UiButton, UiErrorMessage, UiInputDate, TheToaster },

  data() {
    return {
      doctors: [
        { id: 1, name: "Иванов" },
        { id: 2, name: "Захаров" },
        { id: 3, name: "Чернышева" },
      ],

      clientTypes: ["VIP", "Проблемные", "ОМС"],

      documentTypes: [
        "Паспорт",
        "Свидетельство о рождении",
        "Вод. удостоверение",
      ],

      localClient: null,
    };
  },

  validations: {
    localClient: {
      surname: { required, onlyText },
      name: { required, onlyText },
      patronymic: { onlyText },
      birthday: { required },
      phone: { required, minLength: minLength(11), maxLength: maxLength(11), numeric, phoneNumber },
      gender: { onlyText },
      clientGroup: { required },
      doctor: {},
      message: {},

      index: { numeric },
      country: { onlyText },
      region: { onlyText },
      city: { required, onlyText },
      street: { onlyText },
      houseNumber: { numeric },

      documentType: { required },
      series: { numeric, minLength: minLength(4), maxLength: maxLength(4) },
      number: { numeric, minLength: minLength(6), maxLength: maxLength(6) },
      issueBy: { onlyText },
      issueDate: { required },

    },
  },

  methods: {
    sendClient() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      } else {
        //отправка объекта на бэкенд
        this.$refs.toaster.success("Клиент создан");
        console.log(this.localClient);
      }
    },
  },

  created() {
    this.localClient = client();
  },
};
</script>

<style scoped lang="sass">
.form 
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin: 30px 20px 30px 20px

.common-information-contanier,
.adress-contanier,
.document-contanier 
  min-width: 100%
  margin: 30px 0px 30px 0px

.title 
  margin-bottom: 10px

.submit-button 
  width: 100%

.input-group 
  margin-bottom: 15px

</style>
