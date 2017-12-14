class Project < ApplicationRecord
  validates :role_id, :project, :start_date, presence: true

  belongs_to :role
  has_many :reals
end
