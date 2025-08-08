import { create } from 'zustand'

export const useMessageStore = create((set) => ({
    initialMessage: [
        
    ],
    setInitialMessages: (messages) => {
        console.log(messages, 'message');
        set({
                initialMessage: [messages]
    })
    }
})
)
