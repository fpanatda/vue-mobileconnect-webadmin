<script>
import Layout from '@layouts/main'
import FormAddUser from '@components/form-add-user'
import { mapGetters, mapActions } from 'vuex'
import { 
  userMethods, 
  userComputed
} from '@state/helpers'

export default {
  page: {
    title: 'Users',
    meta: [{ name: 'description', content: 'Users' }],
  },
  components: { Layout, FormAddUser },
  data() {
    return {
      baseModule: 'users',
      addUserDialog: '',
      dialog: '',
      dialogTitle: "User Delete Dialog",
      dialogText: "Do you want to delete this user?",
      headers: [
        {
          text: 'User Level',
          left: true,
          value: 'organizationAuth'
        },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Nick Name', value: 'nickName' },
        { text: 'Company Name', value: 'organizationLevel1Name'},
        { text: 'Email', value: 'email' },
        { text: 'Mobile', value: 'mobileTelNumber'},
      ],
      userId: '',
      left: true,
      timeout: 2000,
      // NOT USE! now
      searchVm: {
        contains: {
          firstName: '',
          lastName: ''
        }
      },
      search: '',
      rightDrawer: false,
      query: "",
      quickSearchFilter: 'abc'
    }
  },
  computed: {
    ...userComputed,
    ...mapGetters('organizations', [
      'hadList',
    ]),
    quickSearch: {
      get: () => {
        return this.quickSearchFilter
      },
      set: (val) => {
        this.quickSearchFilter = val
        this.quickSearchFilter && this.quickSearchProducts()
      }
    },
  },
  created() {

    if(!this.hadList)
      this.getOrganizationsList()
    
    if(!this.hadUserList)
      this.getAllUsers()
  },
  methods: {
    ...userMethods,
    ...mapActions('organizations', [
      'getOrganizationsList'
    ]),
    print() {
      window.print()
    },
    edit (item) {

    },
    remove (item) {
      this.userId = item.id
      this.dialog = true
    },
    onConfirm () {
      // NOT FINISHED YET!
      
      // this.$store.dispatch('users/deleteUser', this.organizationId)
      // this.$store.dispatch('users/closeSnackBar', 2000)
      // this.dialog = false
    },
    onCancel () {
      this.userId = ''
      this.dialog = false
    },
    exitSnackbar () {
      this.$store.commit('users/setSnackbar', { snackbar: false })
      this.$store.commit('users/setNotice', { notice: '' })
    },
    reloadData () {
      this.getAllUsers()
    },
  }
}
</script>

<template>
  <Layout>
    <v-container fluid>
      <v-flex xs12>
        <v-card>
          <!-- Controller Tools Panels -->
          <v-card-title>
            <span class="title">
              Users {{ pagination? "("+pagination.totalItems+")": "" }}
              <v-text-field
                append-icon="search"
                label="Quick Search"
                single-line
                hide-details
              />
            </span>
            <v-spacer/>
            <v-btn 
              flat 
              icon 
              color="green"
              @click.native="reloadData()"
            >
              <BaseIcon name="syncAlt"/>            
            </v-btn>
            <v-btn 
              flat 
              icon 
              color="indigo"
            >
              <v-icon>
                print
              </v-icon>
            </v-btn>
          </v-card-title>
          <!-- Insert in Base-Table Component -->
          <BaseTable
            v-if="loading===false"
            :headers="headers"
            :items="items"
            :pagination="pagination"
            :basemodule="baseModule"
            @edit="edit"
            @remove="remove"
          />
        </v-card>
      </v-flex>
      <!-- Pop up Panels -->
      <BaseDialog 
        :dialog="dialog" 
        :dialog-title="dialogTitle" 
        :dialog-text="dialogText"
        @onConfirm="onConfirm" 
        @onCancel="onCancel"
      />
      <v-snackbar 
        v-if="loading===false" 
        :left="true" 
        :timeout="timeout" 
        :color="mode" 
        v-model="snackbar"
      >
        {{ notice }}
        <v-btn 
          dark 
          flat 
          @click.native="exitSnackbar"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
    <!-- FAB panel -->
    <v-btn
      fab
      bottom
      right
      color="indigo"
      dark
      fixed
      @click.stop="addUserDialog = !addUserDialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <FormAddUser 
      :add-user-dialog="addUserDialog" 
      @emitCloseUserDialog="addUserDialog=arguments[0]"
    />
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>

