<template>
    <div>
        <v-row justify="center" class="ml-10">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="4"
            >
            <v-card ref="form">
                <v-card-text>
                <v-text-field
                    color="#A03037"
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Full Name"
                    placeholder="Full Name"
                    required
                ></v-text-field>
                <v-text-field
                    color="#A03037"
                    ref="address"
                    v-model="address"
                    :rules="[
                    () => !!address || 'This field is required',
                    () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                    addressCheck
                    ]"
                    label="Address Line"
                    placeholder="Address"
                    counter="25"
                    required
                ></v-text-field>
                <v-text-field
                    color="#A03037"
                    ref="city"
                    v-model="city"
                    :rules="[() => !!city || 'This field is required', addressCheck]"
                    label="City"
                    placeholder="City"
                    required
                ></v-text-field>
                <v-text-field
                    color="#A03037"
                    ref="state"
                    v-model="state"
                    :rules="[() => !!state || 'This field is required']"
                    label="State/Region"
                    required
                    placeholder="State/Region"
                ></v-text-field>
                <v-text-field
                    color="#A03037"
                    ref="zip"
                    v-model="zip"
                    :rules="[() => !!zip || 'This field is required']"
                    label="ZIP / Postal Code"
                    required
                    placeholder="ZIP / Postal Code"
                ></v-text-field>
                <v-autocomplete
                    color="#A03037"
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    label="Country"
                    placeholder="Country"
                    required
                ></v-autocomplete>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                <v-btn text>
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-tooltip
                    v-if="formHasErrors"
                    left
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                        >
                        <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh form</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn
                    color="#A03037"
                    text
                    @click="submit"
                >
                    Submit
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    
    export default {
        name:'Form',

        data() {
            return {

                customer: [],
                customerData: {

                }
            }
        },
        
    }
</script>