<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col space-y-4">
      <div class="flex space-x-4">
        <TitleWrapper
          title="Enter email"
          required
        >
          <BaseInput
            v-model="formData.userInvitationGroup[0].userEmail"
            :error="v$.userInvitationGroup[0].userEmail.$error"
            @blur="v$.userInvitationGroup[0].userEmail.$touch"
            placeholder="daniel@gmail.com"
            custom-class="w-64"
          />
        </TitleWrapper>
        <TitleWrapper
          :title="formData.spaceAccess.title"
          required
        >
          <div class="min-h-80">
            <BaseSelect
              custom-class="w-40"
              :options="formData.spaceAccess.options"
              @handleToggleSelectItem="handleToggleSelectItem"
            />
          </div>
        </TitleWrapper>
        <TitleWrapper
          :title="formData.permissionAccess.title"
          required
        >
          <div class="min-h-80">
            <BaseSelect
              custom-class="w-40"
              :options="formData.permissionAccess.options"
              @handleToggleSelectItem="handleToggleSelectItem"
            />
          </div>
        </TitleWrapper>
      </div>
      <div class="flex items-center justify-center h-base-select-input text-black-light border-1 border-dashed rounded cursor-pointer">
        + Invite another user
      </div>
      <TitleWrapper
        :title="formData.f2aData.title"
      >
        <BaseCheckboxGroup
          v-model="formData.f2aData.checked"
          :name="formData.f2aData.name"
          :options="formData.f2aData.options"
        />
      </TitleWrapper>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseSelect from "@/base/BaseSelect"
import BaseInput from "@/base/BaseInput"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"

const userInvitationGroup = [{ userEmail: "", canAccess: "", role: "" }]

const spaceAccess = {
  title: "Space access",
  name: "spaceAccess",
  selected: [],
  options: [
    {
      value: "all",
      label: "All",
      selected: true,
      color: "bg-black",
    },
    {
      value: "iOSApp",
      label: "iOS App",
      selected: false,
      color: "bg-black",
    },
    {
      value: "webApp",
      label: "Web App",
      selected: false,
      color: "bg-white-dark-2",
    },
  ],
}

const permissionAccess = {
  title: "Permission access",
  name: "permissionAccess",
  selected: [],
  options: [
    {
      value: "viewOnly",
      label: "View Only",
      selected: true,
      color: "bg-black",
    },
    {
      value: "viewAndRead",
      label: "View & Read",
      selected: false,
      color: "bg-white-dark-2",
    },
  ],
}

const f2aData = {
  title: "",
  name: "2faEnabled",
  checked: [],
  options: [
    {
      value: "2faEnabled",
      label: "Require members to sign in with 2FA-protected account"
    }
  ]
}

export default {
  name: "UserInterview",
  components: { BaseCheckboxGroup, BaseInput, BaseSelect, TitleWrapper },
  props: {
    msg: String,
    send: Function,
    currentState: String,
  },
  setup() {
    const formData = reactive({
      userInvitationGroup,
      spaceAccess,
      permissionAccess,
      f2aData
    })

    const rules = {
      userInvitationGroup: [{
        userEmail: required
      }],
      spaceAccess: {
        checked: {
          required,
        },
      },
      permissionAccess: {
        checked: {
          required,
        },
      },
      f2aData: {
        checked: {
          required,
        },
      }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    function handleToggleSelectItem(updatedOptions) {
      formData.spaceAccess.options = updatedOptions
    }

    return {
      formData,
      v$,
      handleToggleSelectItem,
    }
  },
}
</script>

<style scoped></style>
