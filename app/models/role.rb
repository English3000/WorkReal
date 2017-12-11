class Role < ApplicationRecord

  validates :title, :industry, :location, :start_date, presence: true

  belongs_to :user

end
