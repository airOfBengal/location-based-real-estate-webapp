import React, { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Grid, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent } from '@mui/material'
import houseIconPng from './Assets/Mapicons/house.png';
import apartmentIconPng from './Assets/Mapicons/apartment.png';
import officeIconPng from './Assets/Mapicons/office.png';
import { Icon } from 'leaflet';
import img1 from './Assets/image1.jpg';
import myListings from './Assets/Data/Dummydata';


function Listings() {

  const houseIcon = new Icon({ iconUrl: houseIconPng, iconSize: [40, 40] });
  const apartmentIcon = new Icon({ iconUrl: apartmentIconPng, iconSize: [40, 40] });
  const officeIcon = new Icon({ iconUrl: officeIconPng, iconSize: [40, 40] });

  const [latitude, setLatitude] = useState(24.399601046482303)
  const [longitude, setLongitude] = useState(89.78255291361009)

  function GoToDhaka() {
    setLatitude(23.770395094001735)
    setLongitude(90.38523812747526)
  }

  function GoToJomunaBridge() {
    setLatitude(24.399601046482303)
    setLongitude(89.78255291361009)
  }

  return (
    <Grid container>
      <Grid item xs={3.5}>
        {
          myListings.map((listing) => {
            return (
              <Card key={listing.id} style={{ margin: "0.5rem", border: "1px solid black", position: "relative", }}>
                <CardHeader
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // }
                  title={listing.title}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={listing.picture1}
                  alt={listing.title}
                  style={{ paddingLeft: "1rem", paddingRight: "1rem", height: "20rem", width: "30rem", }}
                />
                <CardContent>
                  <Typography variant="body2">
                    {listing.description.substring(0, 200)}...
                  </Typography>
                </CardContent>
                <Typography style={{ position: "absolute", backgroundColor: "green", zIndex: "1000", color: "white", top: "100px", left: "20px", padding: "5px", }}>
                  {listing.property_status === "Sale" ? (listing.listing_type + ": $" + listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) :
                    (listing.listing_type + ": $" + listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " / " + listing.rental_frequency)
                  }
                </Typography>
                {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>

          </CardActions> */}

              </Card>
            )
          })
        }
      </Grid>
      <Grid item xs={8.5} style={{ marginTop: "0.5rem" }}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh', }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {
                myListings.map((listing) => {
                  function IconDisplay() {
                    if (listing.listing_type === "House") {
                      return houseIcon;
                    } else if (listing.listing_type === "Apartment") {
                      return apartmentIcon;
                    } else if (listing.listing_type === "Office") {
                      return officeIcon;
                    }
                  }

                  return (
                    <Marker key={listing.id} icon={IconDisplay()} position={[listing.location.coordinates[0], listing.location.coordinates[1]]}>
                      <Popup>
                        <Typography variant='h4'>{listing.title}</Typography>
                        <img src={listing.picture1} style={{ width: '15rem', height: '18rem' }} />
                        <Typography variant="body1">{listing.description.substring(0, 150)}...</Typography>
                        <Button variant="contained" fullWidth>Details</Button>
                      </Popup>
                    </Marker>
                  );
                })
              }

              {/* <Marker icon={officeIcon} position={[latitude, longitude]}>
                                <Popup>
                                    <Typography variant='h4'>A title</Typography>
                                    <img src={img1} style={{ width: '15rem', height: '15rem' }} />
                                    <Typography variant="body1">This is some text</Typography>
                                    <Button variant="contained" fullWidth>A link</Button>
                                </Popup>
                            </Marker> */}
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  )
}

export default Listings