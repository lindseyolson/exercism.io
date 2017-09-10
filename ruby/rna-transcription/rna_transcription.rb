class Complement
  def self.of_dna(dna)
    rna = dna.gsub(/[A-Z]/, 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U')
      if dna.length != rna.length
        rna = ''
      end
    rna
  end
end

module BookKeeping
  VERSION = 4
end
