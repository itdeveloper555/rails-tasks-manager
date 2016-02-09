class ProjectsController < ApplicationController
  def index
	@projects = Project.all
	@project = Project.first

  end

  def update

  end

  def create

  end
end
