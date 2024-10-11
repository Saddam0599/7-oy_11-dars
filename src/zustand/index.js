import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = create(
    persist(
        devtools((set) => {
            const storage = localStorage.getItem("bilet");
            let initialTickets = []; 

            if (storage && storage !== "undefined") {
                try {
                    initialTickets = JSON.parse(storage); 
                } catch (error) {
                    console.error("Error parsing JSON from localStorage:", error);
                    initialTickets = []; 
                }
            }

            return {
                tickets: initialTickets, 
                setTicket: (ticket) => set((state) => ({
                    tickets: [...state.tickets, ticket], 
                })),
            };
        }),
        { name: "set" } 
    )
);

export default useStore;
