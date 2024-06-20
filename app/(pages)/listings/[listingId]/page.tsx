import getCurrentUser from '@/actions/getCurrentUser'
import getListingById from '@/actions/getListingById'
import getReservations from '@/actions/getReservations'
import ClientOnly from 'shared/ui/ClientOnly'
import EmptyState from 'shared/ui/EmptyState'
import ListingClient from './listingClient'

interface IParams {
  listingId?: string
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const [listingResult, currentUserResult, reservationsResult] =
    await Promise.all([
      getListingById(params),
      getCurrentUser(),
      getReservations(params),
    ])

  if (!listingResult) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ListingClient
        currentUser={currentUserResult}
        listing={listingResult}
        reservations={reservationsResult}
      />
    </ClientOnly>
  )
}

export default ListingPage