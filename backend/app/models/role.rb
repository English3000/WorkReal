class Role < ApplicationRecord
  validates :user_id, :title, :industry, :location, :start_date, presence: true

  belongs_to :user
  has_many :follows
  has_many :projects
end
