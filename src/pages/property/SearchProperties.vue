<template>
<v-container fluid :class="{clearPad: $vuetify.breakpoint.mdAndUp}"> 
   <v-layout row>
            <v-select
            :items="beds"
            label="Bedrooms"
            class="ddlBed"
            solo flat
            ></v-select>
            <v-select
            :items="baths"
            label="Bathrooms"
            class="ddlBath"
            solo flat
            ></v-select>
            <v-select
            :items="aptstyle"
            label="Style"
            class="ddlStyle"
            solo flat
            ></v-select>
        <v-spacer></v-spacer>
            <v-select
            :items="properties"
            v-model="defaultProperty"
            label="Property"
            class="ddlProperty hidden-sm-and-down"
            solo flat
            ></v-select>    
   </v-layout>
  
    <v-layout row wrap style="clear: left">
        <v-flex md7 sm12 :class="{addPad: $vuetify.breakpoint.mdAndUp}">
            <!--<v-card hover raised v-for="n in 10"  class="mb-3 propcard">-->

            <v-card hover raised class="mb-3 propcard">
            <v-container ma-0 pa-2>
                <v-layout mb-2 hidden-sm-and-up>
                    <v-flex class="proptitle">
                        <h3 >The Sanctuary at Tallyn's Reach Apartments</h3>
                        <address  style="margin-bottom: 5px">901 Sherman Street, Denver, CO 80203</address>
                        <div>
                            <v-img style="height:100%; width: 100%"
                            src="https://images1.forrent.com/i2/-9_oO4uN_3yAwzgRtfbuNF0NRySLDOjtsXWR8mvtD90/110/image.jpg">
                                <v-layout pa-0 column fill-height>
                                    <v-spacer></v-spacer>
                                    <v-flex shrink>
                                        <v-btn fab small tag="Connect" color="white">
                                                <v-icon>email</v-icon>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-img>  
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex hidden-xs-only> 
                        <v-img :class="{thumbnailLg: $vuetify.breakpoint.lgAndUp, thumbnailMd: $vuetify.breakpoint.mdAndDown}"
                        src="https://images1.forrent.com/i2/-9_oO4uN_3yAwzgRtfbuNF0NRySLDOjtsXWR8mvtD90/110/image.jpg">
                            <v-layout pa-0 column fill-height>
                                <v-spacer></v-spacer>
                                <v-flex shrink>
                                    <v-btn fab small tag="Connect" color="white">
                                            <v-icon>email</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-img>  
                    </v-flex>
                    <v-flex xs12>
                        <v-layout ml-2 mb-1 pb-1 hidden-xs-only style="border-bottom: 1px solid #e9e9e9">
                            <v-flex class="proptitle">
                                <h3 >The Sanctuary at Tallyn's Reach Apartments</h3>
                                <address>901 Sherman Street, Denver, CO 80203</address>
                            </v-flex>
                            <v-flex style="text-align: end; white-space:nowrap;">
                                <v-icon class="rating">star</v-icon>
                                <v-icon class="rating">star</v-icon>
                                <v-icon class="rating">star</v-icon>
                                <v-icon class="rating">star</v-icon>
                                <v-icon class="rating">star</v-icon>
                                <i class="ratingnumber">(19)</i>
                            </v-flex>
                        </v-layout>
                        <v-layout ml-2 mb-1 class="priceinfo">
                            <v-flex>
                                $999&nbsp;-&nbsp;$1800
                            </v-flex>
                        </v-layout>
                        <!--Details-->
                        <v-layout ml-2>
                            <v-flex>
                                <ul class="aptdetails">
                                <li>
                                    <i class="fas fa-building ic"></i>
                                    &nbsp; 231 Units
                                </li>
                                <li>
                                    <i class="fas fa-bed ic"></i>
                                    &nbsp; 1&nbsp;-&nbsp;3 Bedrooms
                                </li>
                                <li>
                                    <i class="fas fa-bath ic"></i>
                                    &nbsp; 1&nbsp;-&nbsp;2 Bathrooms
                                </li>
                                </ul>
                            </v-flex>
                            <v-flex>
                                <ul class="aptdetailinfo">
                                <li>
                                    <b>Built:</b>&nbsp;1997
                                </li>                    
                                <li>
                                    <b>Floor Plans:</b>&nbsp;5
                                </li>
                                <li>
                                    <b>Style:</b>&nbsp;Garden
                                </li>                    
                                </ul>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
            </v-card>
        </v-flex>
        <v-flex md5 hidden-sm-and-down style="border: 1px solid #ddd;">
            <div class="sticky">
                test
            </div>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
        export default {
          data: () => ({
            defaultProperty: 'Carriage Place Apartments', 
            beds: ['All Beds', '1 Bed', '2 Beds', '3 Beds', '4+ Beds'],
            baths: ['All Baths', '1 Bath', '2 Baths', '2.5+ Baths'],
            aptstyle: ['All Styles', 'Garden', 'Mid-Rise', 'High Rise'],
            properties: [
                'Benson Downs',
                'Carriage Place Apartments',
                'The Sanctuary At Tallyn\'s Reach',
            ],
          })
        }
      </script>
<style scoped>
.sticky {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 65px;
}
.ddlBed {
    max-width: 150px;
    max-height: 50px;
    border-radius: 3px;
    border: 1px solid #e9e9e9 !important;
    margin: 5px 0 10px 0;
}
.ddlBath {
    max-width: 150px;
    max-height: 50px;
    border-radius: 3px;
    border: 1px solid #e9e9e9 !important;
    margin: 5px 0 10px 15px;
}
.ddlStyle {
    max-width: 150px;
    max-height: 50px;
    border-radius: 3px;
    border: 1px solid #e9e9e9 !important;
    margin: 5px 0 10px 15px;
}
.ddlProperty {
    max-width: 300px;
    overflow: hidden;
    max-height: 50px;
    border-radius: 3px;
    border: 1px solid #e9e9e9 !important;
    margin: 5px 0 10px 15px;
}
.clearPad
{
    
}
.addPad
{
    padding-right: 12px;
}
.propcard
{
    border-radius: 6px;
}
.thumbnailLg
{
    min-width: 310px;
    max-width: 310px;
    border-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    min-height: 232px;
}
.thumbnailMd
{
    min-width: 252px;
    max-width: 252px;
    border-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    min-height: 232px;
}
.proptitle
{
  font-size:1rem; 
  color: #444; 
}
.proptitle address
{
  font-size:.875rem; 
  font-style:normal;
  margin-top: 3px
}
.priceinfo 
{
  font-size: 1.25rem;
  color: #339AED
}
.actbutton
{
  margin: 3px 0 0 0;
  min-width: 215px;
}
.mgmt
{
  font-size: .9rem;
  list-style: none;
  padding: 0;
  color: #444;
}
.aptdetails
{
  font-size: .9rem;
  list-style: none;
  padding: 0;
  color: #444;
}
.aptdetailinfo
{
  font-size: .9rem;
  font-style: normal;
  color: #444;
  overflow: hidden;
}
.rating {
    font-size:12pt;
    color: #eda83b !important;
}
.ratingnumber {
    font-size:10pt;
    font-style:normal;
    color: #636363 !important;
}
li{
    margin-top: 5px;
}

li:first-child {
    margin-top:0;
}
.ic
{
 width: 15px
}
</style>


      