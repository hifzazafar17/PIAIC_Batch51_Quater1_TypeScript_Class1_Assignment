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
  
  // Simulate a guest not being able to make it
  const guestNotAvailable = "Maya ";
  console.log(`${guestNotAvailable} can't make it to dinner.`);
  
  // Modify the list, replacing the unavailable guest with a new one
  const updatedGuestList = originalGuestList.map((guest) =>
    guest === guestNotAvailable ? "Ada" : guest
  );
  
  // Inform about the bigger dinner table
  console.log("Good news! We found a bigger dinner table!");
  
  // Add one new guest to the beginning of the array
  updatedGuestList.unshift("Maria");
  
  // Add one new guest to the middle of the array
  const middleIndex = Math.floor(updatedGuestList.length / 2);
  updatedGuestList.splice(middleIndex, 0, "Noreen");
  
  // Use append() to add one new guest to the end of the list
  updatedGuestList.push("Ada ");
  
  // Generate new invitations
  const newInvitations: string[] = generateInvitations(updatedGuestList);
  
  // Print updated invitations
  newInvitations.forEach((invitation) => console.log(invitation));
  