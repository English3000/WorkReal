class Real < ApplicationRecord
  belongs_to :role
  belongs_to :project
  has_many :truths
end
