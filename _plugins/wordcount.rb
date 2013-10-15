# A simple word/time count plugin for Jekyll.
#
#  input         = The given content (a Liquid tag).
#  count_words   = Returns the word count.
#  count_seconds = Returns the seconds by dividing the word count by 5,
#                  which is how many words the average person reads per second.
#  reading_length= Consumes the length of the post in seconds, works out minutes 
#                  and queries time_and_word for a relevant string.
#  time_and_word = Takes the length of the post in minutes and returns a string 
#                  relating to the length of the read.
#                  the number of counted words.
#  calculate     = Strips the given input content's HTML tags and returns
#                  the number of counted words.
#
#  Usage:
#  {{ content | count_words }}
#  {{ content | count_seconds }}
#  {{ content | reading_length }}
#
module Jekyll
  module WordCount
    def count_words(input)
      calculate(input)
    end

    def count_seconds(input)
      calculate(input) / 5
    end

    def reading_length(input)
      seconds = count_seconds(input)
      minutes = (seconds/60).round(0)
      return time_and_word(minutes)
    end

    def time_and_word(minutes)
      string = case
               when minutes === 0
                 "Less than a 1 minute read."
               when minutes === 1
                 "About a minutes read."
               when minutes === 2
                 "A couple of minutes read."
               when minutes > 2
                 "#{minutes} minute read."
               end
      return string
    end

    def calculate(input)
      input.gsub(/<\/?[^>]*>/, "").split.size
    end
  end
end

Liquid::Template.register_filter(Jekyll::WordCount)