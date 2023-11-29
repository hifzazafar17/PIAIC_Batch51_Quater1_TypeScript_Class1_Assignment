// Define the original guest list
const originalGuestList: string[] = [
    "Ania",
    "Maya",
    "Eurm",
  ];
  
  // Function to generate dinner invitations
  function generateInvitations(guests: string[]): string[] {
    return guests.map((guest) => `Dear ${guest}, you are invited to dinner!`);
  }
  
  // Invite guests
  const originalInvitations: string[] = generateInvitations(originalGuestList);
  
  // Print original invitations
  originalInvitations.forEach((invitation) => console.log(invitation));
  
  // Inform about the number of people invited to dinner
  console.log(`We are inviting ${originalGuestList.length} people to dinner.`);
  