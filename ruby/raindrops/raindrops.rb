class Raindrops
  def self.convert(num)
    drops = {3=>'Pling', 5=>'Plang', 7=>'Plong'}
    output = drops.select{ |key, value| (num % key).zero? }.values.join
    output.empty? && num.to_s || output
  end
end

module BookKeeping
  VERSION = 3
end
