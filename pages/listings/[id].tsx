import { Container, Flex, Heading, Image, VStack } from "@chakra-ui/react"
import axios from "axios"
import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Listing } from "types"


const Listing: NextPage=()=>{
    const router = useRouter()
    const {id} = router.query
    const idString = {id}.id
    const [listing, setListing] = useState<Listing | null>(null)
    if (listing){
        console.log("listing:", listing.reviews)
    }
    
    useEffect(() => {
      axios.get<{listing: Listing}>(`/api/listings/${id}`).then((r) => {  
        setListing(r.data.listing)
      })
    }, [id])

    return( 
      <>
        <p>Listing ID: {listing.name}</p> 
        

      </>
    )
}

export default Listing

