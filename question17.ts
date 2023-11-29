
let guest_List: string[] = ["Aisha", "usama", "tayyab", "Imran", "muawiya", "Zainab"];

for (const guest of guest_List) {
    console.log(`Dear ${guest},\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]`);
}


console.log("\nGreat news! We found a bigger dinner table!\n");

// new guests in to the list
const new_Guests: string[] = ["Ali", "Sara"];
guest_List.unshift(new_Guests[0]);  
guest_List.splice(Math.floor(guest_List.length / 2), 0, new_Guests[1]);  
guest_List.push("Ahmed"); 

// invitations to each person
for (const guest of guest_List) {
    console.log(`Dear ${guest},\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]`);
}


console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");


while (guest_List.length > 2) {
    const removedGuest = guest_List.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}



for (const remainingGuest of guest_List) {
    console.log(`Dear ${remainingGuest},\n\tYou're still invited to dinner. We look forward to seeing you!\nSincerely, [HifzaZafar]`);
}


guest_List = [];


console.log("\nRemaining guest list:", guest_List);
