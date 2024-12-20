const shouting = 
            (message: string):boolean => 
                  message === message.toUpperCase() && 
                  (/[A-Z]+/).test(message),
      question = 
            (message: string):boolean => 
                  message.trim().endsWith('?'),
      silence  = 
            (message: string):boolean => 
                  !message.trim(),
      forceful = 
            (message: string):boolean => 
                  shouting(message) && question(message)

export const hey = (message: string): string => 
            forceful(message) ? "Calm down, I know what I'm doing!" : 
            shouting(message) ? "Whoa, chill out!"                  : 
            question(message) ? "Sure."                             : 
            silence (message) ? "Fine. Be that way!" : "Whatever."

