// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestlist: string=["Ali","Alyan","Talha"]
let unableToCome: string="Talha";
guestlist=guestlist.filter(guest=>guest!== unableToCome)
guestlist.push("Taha");
for (let guest of guestlist){
console.log(`I would be happy if you join us for luch ${guest}`);
    
}

