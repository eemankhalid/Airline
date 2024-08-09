import React from 'react'
import GroupTravelRequirements from '../components/GroupTravelRequirements'
import GroupTravelBenefits from '../components/GroupTravelBenefits'
import GroupTravelForm from '../components/GroupTravelForm'

const GroupTravelRequestPage = () => {
  return (
    <div>
     <GroupTravelRequirements />
     <GroupTravelBenefits />
     <GroupTravelForm />
    </div>
  )
}

export default GroupTravelRequestPage
